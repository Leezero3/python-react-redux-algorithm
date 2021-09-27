from dataclasses import dataclass

@dataclass
class Calculator(object):
    num1: int
    num2: int

    @property
    def num1(self) -> int: return self._num1

    @property
    def num2(self) -> int: return self._num2

    @num1.setter
    def num1(self, num1): self._num1 = num1

    @num2.setter
    def num2(self, num2): self._num2 = num2

    def add(self):
        return self.num1 + self.num2

    def subtract(self):
        return self.num1 - self.num2

    def multiple(self):
        return self.num1 * self.num2

    def divide(self):
        return self.num1 / self.num2
