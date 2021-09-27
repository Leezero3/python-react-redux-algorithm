from django.test import TestCase
import unittest

from admin.sorting.models_oop import Calculator


class TestCalculator(unittest.TestCase):

    def test_add(self):
        instance = Calculator()
        instance.num1 = 1
        instance.num2 = 2
        res = instance.add()
        self.assertEqual(res, 3)


    def test_subtract(self):
        instance = Calculator()
        instance.num1 = 2
        instance.num2 = 1
        res = instance.subtract()
        self.assertEqual(res, 1)



if __name__ == '__main__':
    unittest.main()