a = [8] * 2  # [8, 8]
b = [5, 9, 1]
c = [a, b]  # [[8, 8], [5, 9, 1]]
d = c  # [[8, 8], [5, 9, 1]]
a[:] = [6]  # [6]
b[2] = 4
print(d)