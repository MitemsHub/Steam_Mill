import os
import json

class Config:
    def __init__(self):
        self.env = os.getenv('APP_ENV', 'development')
        self.config = self.load_config()

    def load_config(self):
        config_file = f'config/{self.env}.json'
        with open(config_file, 'r') as file:
            return json.load(file)

    def get(self, key, default=None):
        return self.config.get(key, default)
