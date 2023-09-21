def calc_base_area(base_length, base_width):
    return base_length * base_width


def calc_pyramid_volume(base_length, base_width, pyramid_height):
    base_area = calc_base_area(base_length, base_width)
    volume = base_area * pyramid_height / 3


length = float(input())
width = float(input())
height = float(input())
print(f'Volume for {length} {width} {height} is: {calc_pyramid_volume(length, width, height):.2f}')