terms = int(input('How many terms? '))

n1, n2 = 0, 1
count = 0
n_next = n1

for i in range(count, terms + 1):
    # 0. print n1
    print(n_next, end=', ')

    # 1. add n1 and n2
    n_next = n1 + n2

    # 2. n1 becomes n2, n2 becomes n1 + n2
    n1 = n2
    n2 = n_next
