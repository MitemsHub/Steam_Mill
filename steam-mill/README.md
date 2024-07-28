# Steam-Mill

Steam-Mill is an open-source project for managing steam engines.

## Features

- Add a steam engine
- List all steam engines
- Remove a steam engine

## Dependencies

- [express](https://www.npmjs.com/package/express)
- [tea-utils](https://www.npmjs.com/package/tea-utils)

## Installation

Clone the repository and install the dependencies:

```bash
git clone https://github.com/YourUsername/steam-mill.git
cd steam-mill
npm install

# Steam Utils

`steam-utils` is a library providing utilities for steam engine performance monitoring and failure prediction.

## Installation

```bash
npm install steam-utils

## Features

- **Logging Library**: Provides a robust logging mechanism with file rotation and console output.

## Usage

### Logging Library

```python
from steam_utils.logging import Logger

# Initialize the logger
logger = Logger(name='steam-mill').get_logger()

# Example usage
logger.info("This is an info message")
logger.error("This is an error message")
