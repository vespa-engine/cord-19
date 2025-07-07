<!-- Copyright Yahoo. Licensed under the terms of the Apache 2.0 license. See LICENSE in the project root. -->

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://assets.vespa.ai/logos/Vespa-logo-green-RGB.svg">
  <source media="(prefers-color-scheme: light)" srcset="https://assets.vespa.ai/logos/Vespa-logo-dark-RGB.svg">
  <img alt="#Vespa" width="200" src="https://assets.vespa.ai/logos/Vespa-logo-dark-RGB.svg" style="margin-bottom: 25px;">
</picture>

# CORD-19 Search has been _shut down_
This application served data from the [COVID-19 Open Research Dataset (CORD-19)](https://allenai.org/data/cord-19) dataset.

This repo contains the __frontend__ of the application previosuly served at [https://cord19.vespa.ai/](https://cord19.vespa.ai/).
The __backend__  was released as a [Vespa](https://vespa.ai) sample application:
[https://github.com/vespa-cloud/cord-19-search](https://github.com/vespa-cloud/cord-19-search). All of this is open source, licenced under Apache 2.0. 

For API usage, see the [CORD-19 API](/cord-19-queries.md).

## Contribute and run your own

Contributions are appreciated, see [contributing](/CONTRIBUTING.md).
Use [issues](https://github.com/vespa-engine/cord-19/issues) for bug reports. 

Data access in Vespa Cloud is secured.

Refer to [vespa-documentation-search](https://github.com/vespa-cloud/vespa-documentation-search/blob/main/README.md)
to learn how to manage secrets using AWS Lambda and AWS Parameter Store.

To create your __own copy__ of the backend Vespa application, see 
[experiment yourself](https://github.com/vespa-cloud/cord-19-search/blob/main/experiment-yourself.md).

Please use [cord19.vespa.ai](https://cord19.vespa.ai/) when referring to this.

## Contact
Tweet us at [@vespaengine](https://twitter.com/vespaengine),
or mail at [info@vespa.ai](mailto:info@vespa.ai).

----

[![CORD-19 UI](https://github.com/vespa-engine/cord-19/workflows/CORD-19%20UI/badge.svg?branch=master)](https://github.com/vespa-engine/cord-19/actions?query=workflow%3A%22CORD-19+UI%22)
