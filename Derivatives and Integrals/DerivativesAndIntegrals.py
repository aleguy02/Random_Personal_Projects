# change string of a function into the string of the derivative of that function
from functions import *

def take_derivative(func):
    terms_list = func.split(' + ')
    new_terms_list = []
    for term in terms_list:
        coefficient, exponent = (split_item(term))
        coefficient *= exponent
        exponent -= 1
        joined_new_term = (join_new_item(coefficient, exponent))
        new_terms_list.append(joined_new_term)
    new_func = create_new_func(new_terms_list)

    return new_func


if __name__ == '__main__':
    func = 'n^10 + 16n^3 + n^2 + 16n + 12'
    print('Original function: ', func)
    new_func = take_derivative(func)
    print('New function: ', new_func)

    print()

    func = '2n^6 + 8n + n^2 + 15'
    print('Original function: ', func)
    new_func = take_derivative(func)
    print('New function: ', new_func)

    print()

    func = '16 + 24n^3 + 5n^3 + 16n'
    print('Original function: ', func)
    new_func = take_derivative(func)
    print('New function: ', new_func)

