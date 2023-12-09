number = '12345'
sum = 0

for digit in number:
    sum += int(digit)

print(sum)

stopping_index = int(input('Enter number u want to stop. '))

current_position = 1

while current_position <= stopping_index:
    if current_position % 3 == 0:
        print(current_position, end = ' ')
    current_position += 1

print()
for current_position in range(1, stopping_index + 1):  # range method is not inclusive
    if current_position % 3 == 0:
        print(current_position, end = ' ')

# this one is the most efficient
print()
for current_position in range(3, stopping_index + 1, 3):
    print(current_position, end = ' ')
