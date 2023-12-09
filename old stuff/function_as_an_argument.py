def shout(text):
    return text.upper()


def whisper(text):
    return text.lower()


def greeting(func):
    greeting_line = func('This is a greeting. Hello.')  # func will adjust size of the greeting string
    print(greeting_line)


greeting(shout)
greeting(whisper)
