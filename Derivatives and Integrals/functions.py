def split_item(item):
    if '^' in item:
        coefficient, exponent = item.split('^')
        coefficient = '1' if coefficient == 'n' else coefficient[:-1]
        return int(coefficient), int(exponent)
    else:
        if 'n' in item:
            coefficient = item[:-1]
            return int(coefficient), 1
        else:
            coefficient = item
            return int(coefficient), 0

def join_new_item(coefficient, exponent):
    special_case1 = bool(coefficient == 0)  # Is the term is equal to 0?
    special_case2 = bool(exponent == 0)  # Is the exponent equal to 0, making n = 1? In other words, should 'n' be deleted?
    special_case3 = bool(exponent == 1) # Is the exponent equal to 1? Should '^1' be deleted?

    if not special_case1 and not special_case2 and not special_case3:
        joined_term = str(coefficient) + 'n^' + str(exponent)
    elif special_case1:
        joined_term = '0'
    elif special_case2:
        joined_term = str(coefficient)
    else:
        joined_term = str(coefficient) + 'n'

    return joined_term

def create_new_func(new_terms_list: list):
    new_func = ''
    for term in new_terms_list:
        if term == '0':
            continue
        else:
            new_func += term + ' + '
    new_func = new_func.strip(' + ')  # removes any extra ' + ' at the end of the equation

    return new_func
