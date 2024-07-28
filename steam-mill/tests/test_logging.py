import unittest
from steam_utils.logging.logger import Logger

class TestLogger(unittest.TestCase):
    def setUp(self):
        self.logger = Logger(name='test-logger').get_logger()

    def test_info_log(self):
        self.logger.info("Testing info log")
        self.assertTrue(True)

    def test_error_log(self):
        self.logger.error("Testing error log")
        self.assertTrue(True)

if __name__ == '__main__':
    unittest.main()
