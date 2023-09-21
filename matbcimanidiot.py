# I forgot my calculator one day while working on a project, so I decided to make a program that would do my
# calculations and display them so I could write them down on my assignment.
import math

G = 6.67384 * (10 ** (-11))
a = 3.735 * (10 ** 7)
P = 1.36 * (10 ** 6)

step1 = 4 * math.pi ** 2
print(f'{step1: .3f}')

step2 = step1 * a ** 3
scientific_notation = "{:e}".format(step2)
print(scientific_notation)

step3 = step2 / G
scientific_notation="{:e}".format(step3)
print(scientific_notation)

step4 = step3 / P ** 2
scientific_notation = "{:e}".format(step4)
print(f'Eris mass is {scientific_notation}')

Eris_mass = step4


step1 = 0.75 * Eris_mass
print(step1)

step2 = step1 / math.pi
print(step2)

BREAK = 'BREAK'
print(BREAK)

r = 2400000/2
print(r**3)
print(f'r^3 is {"{:e}".format(r ** 3)}')

step3 = step2 / r ** 3
print(step3)

print(f'Eris density is {"{:e}".format(step3)}')
