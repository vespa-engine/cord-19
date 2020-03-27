import { useReducer } from 'react';

const backend =
  process.env.REACT_APP_BACKEND_URL || 'https://api.cord19.vespa.ai';

function Get(url, params) {
  return Fetch('GET', url, params);
}

function Post(url, params) {
  return Fetch('POST', url, params);
}

function Put(url, params) {
  return Fetch('PUT', url, params);
}

function Patch(url, params) {
  return Fetch('PATCH', url, params);
}

function Delete(url, params) {
  return Fetch('DELETE', url, params);
}

function Fetch(method, url, params) {
  function reducer(state, action) {
    return { ...state, ...action };
  }

  if (!url.startsWith('http')) url = backend + url;

  params = params || {};
  params.method = method;
  params.credentials = 'same-origin'; //Not default for all browsers yet

  const fetcher = () =>
    fetch(url, params)
      // Reject promise if response is not OK
      .then(response => {
        if (response.ok) return response;

        return response.text().then(text => {
          let message = text;
          try {
            const json = JSON.parse(text);
            if ('message' in json) message = json.message;
          } catch (e) {
            // not JSON
          }
          return Promise.reject({ message, code: response.status });
        });
      })

      // automatically return the data if it's a known content type
      .then(response => {
        const contentType = response.headers.get('content-type');
        if (!contentType || params.returnRaw) return response;
        if (contentType.includes('application/json')) {
          return response.json();
        } else if (contentType.includes('text/plain')) {
          return response.text();
        }
        return response;
      });

  let isCanceled = false;
  const useFetcher = versionArg => {
    const version = versionArg || 0;
    const initialState = {
      url: url,
      loading: null,
      cancel: () => {
        isCanceled = true;
      },
      response: null,
      error: null,
      version: version,
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    if (url !== state.url || version !== state.version) dispatch(initialState);

    if (state.loading === null) {
      dispatch({ loading: true });
      fetcher()
        .then(response => {
          if (!isCanceled)
            dispatch({
              loading: false,
              response: response,
              version: version,
            });
        })
        .catch(error => {
          if (!isCanceled)
            dispatch({ loading: false, error: error, version: version });
        });
    }
    return { ...state, loading: state.loading === null || state.loading };
  };

  return { promise: fetcher, state: useFetcher };
}

export { Get, Post, Put, Patch, Delete };
