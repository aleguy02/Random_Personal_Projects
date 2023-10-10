# long term goal now includes using advanced string formatting to display each variable before and after derivation

def get_derivative_list(expression):
    '''change the coefficient for each term and change the exponent for each term'''
    term_list = expression.split(' + ')  # so far, the function only works on expressions with only addition
    derived_term_list = []
    for term in term_list:
        if 'n' not in term:  # terms that do not have a variable (n) can be discarded
            continue
        print(term)
        split_term = term.split('n')
        if '' in split_term:  # if a variable in the original expression doesn't have a exponent written out, we can assume that the exponent = 1
            split_term[split_term.index('')] = '^1'
        print(split_term, end='--> ')
        # we need to multiply the coefficient by the exponent, THEN subtract 1 from the exponent
        derived_split_term = []
        split_term[1] = split_term[1].strip('^')  # remove '^' from the string of split_term[1]
        coefficient = int(split_term[0]) * int(split_term[1])
        exponent = int(split_term[1]) - 1
        derived_split_term.extend([str(coefficient), f'^{str(exponent)}'])
        print('new split term:', derived_split_term)
        # now I need to left and right append the split terms to variable n, then add this 'new term' into the derived term list
        if derived_split_term[1] == '^0':
            new_term = f'{coefficient}'
        elif derived_split_term[1] == '^1':
            new_term = f'{coefficient}n'
        else:
            new_term = f'{coefficient}n^{exponent}'
        print('New term:', new_term)
        derived_term_list.append(new_term)
    return derived_term_list

def create_derived_func(operand_list):
    pass

# change string of a function into the string of the derivative of that function
func = 'n^10 + 16n^3 + 2n^2 + 16n + 12'
new_variables = get_derivative_list(func)
print(new_variables)