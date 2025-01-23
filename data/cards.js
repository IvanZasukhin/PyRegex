const themes = {
    'basic-functions': {
        title: 'Основные функции',
        cards: [
              {
                title: 'Поиск совпадений: <code>re.search()</code>',
                description: 'Находит первое совпадение с шаблоном в строке.',
                code: `import re
text = "Привет, мир!"
pattern = "мир"
result = re.search(pattern, text)
if result:
    print(result.group(0))  # Вывод: мир`
            },
            {
                title: 'Сопоставление с началом: <code>re.match()</code>',
                description: 'Сопоставляет шаблон с началом строки.',
                code: `import re
text = "Python is cool"
pattern = "Python"
result = re.match(pattern, text)
if result:
    print(result.group(0))  # Вывод: Python`
            },
             {
                title: 'Сопоставление с началом в любой позиции: <code>re.fullmatch()</code>',
                description: 'Пытается сопоставить весь шаблон со всей строкой.',
                code: `import re
text = "Python"
pattern = "Python"
result = re.fullmatch(pattern, text)
if result:
    print(result.group(0))  # Вывод: Python`
            },
            {
                title: 'Поиск всех совпадений: <code>re.findall()</code>',
                description: 'Находит все совпадения с шаблоном в строке и возвращает список.',
                code: `import re
text = "apple banana apple"
pattern = "apple"
result = re.findall(pattern, text)
print(result)  # Вывод: ['apple', 'apple']`
            },
              {
                title: 'Поиск всех совпадений с итератором: <code>re.finditer()</code>',
                description: 'Находит все совпадения с шаблоном в строке и возвращает итератор.',
                code: `import re
text = "apple banana apple"
pattern = "apple"
result = re.finditer(pattern, text)
for match in result:
    print(match.group(0))   # Вывод: apple apple`
            },
            {
                title: 'Замена совпадений: <code>re.sub()</code>',
                description: 'Заменяет все совпадения с шаблоном в строке на новую строку.',
                code: `import re
text = "red apple, green apple"
pattern = "apple"
replacement = "orange"
result = re.sub(pattern, replacement, text)
print(result)  # Вывод: red orange, green orange`
            },
             {
                title: 'Замена совпадений с ограничением: <code>re.sub(count=)</code>',
                description: 'Заменяет определенное количество совпадений с шаблоном в строке.',
                 code: `import re
text = "red apple, green apple, yellow apple"
pattern = "apple"
replacement = "orange"
result = re.sub(pattern, replacement, text, count = 2)
print(result) # Вывод: red orange, green orange, yellow apple`
             },
            {
                title: 'Замена с помощью функции: <code>re.subn()</code>',
                description: 'Выполняет замену и возвращает кортеж (новая строка, количество замен).',
                 code: `import re
text = "red apple, green apple"
pattern = "apple"
replacement = "orange"
result = re.subn(pattern, replacement, text)
print(result) # Вывод: ('red orange, green orange', 2)`
             },
            {
                title: 'Разбиение строки: <code>re.split()</code>',
                description: 'Разбивает строку по совпадениям с шаблоном, возвращая список подстрок.',
                code: `import re
text = "apple,banana,cherry"
pattern = ","
result = re.split(pattern, text)
print(result)  # Вывод: ['apple', 'banana', 'cherry']`
            },
              {
                title: 'Разбиение строки с ограничением: <code>re.split(maxsplit=)</code>',
                description: 'Разбивает строку по совпадениям с шаблоном с ограничением максимального количества разбиений',
                 code: `import re
text = "apple,banana,cherry,date"
pattern = ","
result = re.split(pattern, text, maxsplit=2)
print(result)  # Вывод: ['apple', 'banana', 'cherry,date']`
             },
             {
                title: 'Компиляция регулярного выражения: <code>re.compile()</code>',
                description: 'Компилирует регулярное выражение для более эффективного использования в дальнейшем.',
                code: `import re
pattern = re.compile("apple")
text = "apple banana apple"
result = pattern.findall(text)
print(result)   # Вывод: ['apple', 'apple']`
            },
             {
                title: 'Проверка наличия совпадения:  <code>bool(re.search())</code>',
                description: 'Проверяет наличие совпадения с шаблоном и возвращает булевое значение.',
                code: `import re
text = "Hello, world!"
pattern = "world"
result = bool(re.search(pattern, text))
print(result)   # Вывод: True`
            },
              {
                  title: 'Поиск совпадений в строке и возвращение позиции: <code>match.start()</code>, <code>match.end()</code>, <code>match.span()</code>',
                  description: 'Возвращает начальную и конечную позиции совпадения в строке',
                  code:`import re
text = "Python is awesome"
pattern = "awesome"
match = re.search(pattern, text)
if match:
    print(match.start()) # Вывод: 10
    print(match.end()) # Вывод: 17
    print(match.span()) # Вывод: (10, 17)`
              }

        ]
    },
    'metacharacters': {
        title: 'Метасимволы',
        cards: [
               {
                title: 'Точка (<code>.</code>)',
                description: 'Соответствует любому символу, кроме символа новой строки.',
                code: `import re
text = "cat mat hat"
pattern = ".at"
result = re.findall(pattern, text)
print(result) # Вывод: ['cat', 'mat', 'hat']`
            },
             {
                title: 'Начало строки (<code>^</code>)',
                description: 'Соответствует началу строки.',
                code: `import re
text = "start text"
pattern = "^start"
result = re.search(pattern, text)
if result:
    print(result.group(0)) # Вывод: start`
            },
             {
                title: 'Конец строки (<code>$</code>)',
                 description: 'Соответствует концу строки.',
                code: `import re
text = "text end"
pattern = "end$"
result = re.search(pattern, text)
if result:
    print(result.group(0)) # Вывод: end`
             },
            {
                title: 'Звездочка (<code>*</code>)',
                description: 'Соответствует нулю или более вхождениям предшествующего символа или группы.',
                code: `import re
text = "a ab abb abbb"
pattern = "ab*"
result = re.findall(pattern, text)
print(result)  # Вывод: ['a', 'ab', 'abb', 'abbb']`
            },
            {
                title: 'Плюс (<code>+</code>)',
                description: 'Соответствует одному или более вхождениям предшествующего символа или группы.',
                code: `import re
text = "a ab abb abbb"
pattern = "ab+"
result = re.findall(pattern, text)
print(result)  # Вывод: ['ab', 'abb', 'abbb']`
            },
            {
                title: 'Вопросительный знак (<code>?</code>)',
                description: 'Соответствует нулю или одному вхождению предшествующего символа или группы.',
                code: `import re
text = "color colour"
pattern = "colou?r"
result = re.findall(pattern, text)
print(result) # Вывод: ['color', 'colour']`
            },
               {
                title: 'Ленивая квантификация (<code>*?</code>, <code>+?</code>, <code>??</code>)',
                 description: 'Соответствует наименьшему возможному количеству повторений',
                code: `import re
text = "ababab"
pattern = "ab*?"
result = re.findall(pattern, text)
print(result) # Вывод: ['a', 'a', 'a']`
            },
              {
                title: 'Фигурные скобки (<code>{n}</code>)',
                description: 'Соответствует указанному количеству повторений предшествующего символа или группы.',
                code: `import re
text = "aaa aaaa aaaaa"
pattern = "a{3}"
result = re.findall(pattern, text)
print(result)  # Вывод: ['aaa']`
            },
             {
                title: 'Фигурные скобки (<code>{n,}</code>)',
                description: 'Соответствует n или более вхождениям предшествующего символа или группы.',
                code: `import re
text = "aaa aaaa aaaaa"
pattern = "a{3,}"
result = re.findall(pattern, text)
print(result) # Вывод: ['aaa', 'aaaa', 'aaaaa']`
             },
            {
                title: 'Фигурные скобки (<code>{n,m}</code>)',
                description: 'Соответствует от n до m вхождений предшествующего символа или группы.',
                code: `import re
text = "aaa aaaa aaaaa"
pattern = "a{2,4}"
result = re.findall(pattern, text)
print(result) # Вывод: ['aaa', 'aaaa']`
            },
             {
                title: 'Квадратные скобки (<code>[]</code>)',
                description: 'Соответствует любому символу, указанному внутри скобок.',
                code: `import re
text = "cat bat rat"
pattern = "[bcr]at"
result = re.findall(pattern, text)
print(result) # Вывод: ['cat', 'bat', 'rat']`
            },
             {
                title: 'Диапазон в квадратных скобках (<code>[a-z]</code>)',
                description: 'Соответствует любому символу в указанном диапазоне.',
                code: `import re
text = "a b c 1 2 3"
pattern = "[a-c]"
result = re.findall(pattern, text)
print(result) # Вывод: ['a', 'b', 'c']`
            },
            {
                title: 'Исключение в квадратных скобках (<code>[^...]</code>)',
                 description: 'Соответствует любому символу, не указанному внутри скобок.',
                 code: `import re
text = "cat bat rat"
pattern = "[^b]at"
result = re.findall(pattern, text)
print(result) # Вывод: ['cat', 'rat']`
             },
            {
                title: 'Круглые скобки (<code>()</code>)',
                description: 'Группируют символы для применения операторов или извлечения частей совпадения.',
                code: `import re
text = "123-456-7890"
pattern = r"(\\d{3})-(\\d{3})-(\\d{4})"
result = re.search(pattern, text)
if result:
    print(result.groups()) # Вывод: ('123', '456', '7890')`
            },
             {
                title: 'Вертикальная черта (<code>|</code>)',
               description: 'Выражение "или". Соответствует одному из разделенных выражений.',
               code: `import re
text = "cat dog bird"
pattern = "cat|bird"
result = re.findall(pattern, text)
print(result) # Вывод: ['cat', 'bird']`
           },
           {
                title: 'Группировка и захват (<code>()</code>)',
                description: 'Группирует и захватывает совпадающие части текста.',
                code: `import re
text = "my name is John Doe"
pattern = r"my name is (\\w+) (\\w+)"
result = re.search(pattern, text)
if result:
    print(result.groups()) # Вывод: ('John', 'Doe')`
            },
             {
                title: 'Не захватывающая группа (<code>(?:...)</code>)',
               description: 'Группирует, но не захватывает совпадения',
               code: `import re
text = "my name is John Doe"
pattern = r"my name is (?:\\w+) (\\w+)"
result = re.search(pattern, text)
if result:
    print(result.groups()) # Вывод: ('Doe',)`
           },
               {
                title: 'Символ любой цифры (<code>\\d</code>)',
                  description: 'Соответствует любой цифре.',
                  code: `import re
text = "Number: 123"
pattern = "\\d+"
result = re.search(pattern, text)
if result:
    print(result.group(0))  # Вывод: 123`
               },
               {
                    title: 'Символ любой не цифры (<code>\\D</code>)',
                    description: 'Соответствует любому символу, не являющемуся цифрой.',
                   code: `import re
text = "Number: 123, text"
pattern = "\\D+"
result = re.search(pattern, text)
if result:
    print(result.group(0)) # Вывод: Number: , text`
                  },
               {
                title: 'Символ любого буквенно-цифрового символа (<code>\\w</code>)',
                description: 'Соответствует любому буквенно-цифровому символу (a-z, A-Z, 0-9 и _).',
               code: `import re
text = "word_123"
pattern = "\\w+"
result = re.search(pattern, text)
if result:
    print(result.group(0)) # Вывод: word_123`
                },
               {
                    title: 'Символ любого не буквенно-цифрового символа (<code>\\W</code>)',
                    description: 'Соответствует любому символу, не являющемуся буквенно-цифровым.',
                    code: `import re
text = "word_123, .?!"
pattern = "\\W+"
result = re.search(pattern, text)
if result:
 print(result.group(0))# Вывод: , .?!`
               },
            {
                title: 'Символ любого пробельного символа (<code>\\s</code>)',
                 description: 'Соответствует любому пробельному символу (пробел, табуляция, новая строка и т. д.).',
                code: `import re
text = "one   two\\nthree"
pattern = "\\s+"
result = re.findall(pattern, text)
print(result) # Вывод: ['   ', '\\n']`
             },
            {
                    title: 'Символ любого не пробельного символа (<code>\\S</code>)',
                    description: 'Соответствует любому символу, не являющемуся пробельным.',
                    code: `import re
text = "one   two\\nthree"
pattern = "\\S+"
result = re.findall(pattern, text)
print(result) # Вывод: ['one', 'two', 'three']`
               },
              {
                title: 'Граница слова (<code>\\b</code>)',
                description: 'Соответствует границе слова (началу или концу слова).',
                code: `import re
text = "word words"
pattern = r"\\bword\\b"
result = re.search(pattern, text)
if result:
    print(result.group(0))   # Вывод: word`
             },
            {
                title: 'Не граница слова (<code>\\B</code>)',
                  description: 'Соответствует любой позиции, не являющейся границей слова.',
                 code: `import re
text = "word words"
pattern = r"\\Bword\\B"
result = re.search(pattern, text)
if result:
    print(result) # Вывод: None`
            },
            {
                title: 'Экранирование символов (<code>\\</code>)',
                description: 'Используется для экранирования специальных символов, если нужно найти их в исходном виде.',
                code: `import re
text = "price is $10"
pattern = "\\$10"
result = re.search(pattern, text)
if result:
    print(result.group(0))  # Вывод: $10`
            },
              {
                title: 'Ссылка на группу (<code>\\1</code>, <code>\\2</code>, etc)',
                  description: 'Соответствует тексту, который был сопоставлен с ранее захваченной группой',
                  code: `import re
text = "apple apple banana"
pattern = r"(\\w+) \\1"
result = re.search(pattern, text)
if result:
    print(result.group(0)) # Вывод: apple apple`
              }

        ]
    },
    'flags': {
        title: 'Флаги',
        cards: [
               {
                title: '<code>re.IGNORECASE</code> или <code>re.I</code>',
                description: 'Игнорирует регистр при поиске совпадений.',
                code: `import re
text = "Hello World"
pattern = "hello"
result = re.search(pattern, text, re.IGNORECASE)
if result:
    print(result.group(0)) # Вывод: Hello`
            },
              {
                title: '<code>re.ASCII</code> или <code>re.A</code>',
                description: 'Делает \\w, \\b, \\s и \\d соответствующими только ASCII-символам.',
                 code: `import re
text = "тест test"
pattern = "\\w+"
result = re.findall(pattern, text, re.A)
print(result) # Вывод: ['test']`
              },
            {
                title: '<code>re.MULTILINE</code> или <code>re.M</code>',
                description: 'Позволяет ^ и $ соответствовать началу и концу каждой строки (а не только всей строки).',
                code: `import re
text = """first line
second line"""
pattern = "^second"
result = re.search(pattern, text, re.MULTILINE)
if result:
    print(result.group(0)) # Вывод: second`
            },
            {
                title: '<code>re.DOTALL</code> или <code>re.S</code>',
                description: 'Позволяет точке (.) соответствовать любому символу, включая символ новой строки.',
                code: `import re
text = "first\\nsecond"
pattern = "first.second"
result = re.search(pattern, text, re.DOTALL)
if result:
    print(result.group(0)) # Вывод: first\\nsecond`
            },
            {
                title: '<code>re.VERBOSE</code> или <code>re.X</code>',
                description: 'Позволяет добавлять комментарии и пробелы в регулярное выражение для большей читаемости.',
                code: `import re
pattern = r"""
\\d{3}   # Три цифры
-       # Дефис
\\d{3}   # Три цифры
-       # Дефис
\\d{4}   # Четыре цифры
"""
text = "123-456-7890"
result = re.search(pattern, text, re.VERBOSE)
if result:
    print(result.group(0)) # Вывод: 123-456-7890`
            },
             {
                title: '<code>re.LOCALE</code> или <code>re.L</code>',
               description: 'Делает \\w, \\b, \\s и \\d соответствующими текущей локали.',
               code: `import re
import locale
locale.setlocale(locale.LC_ALL, 'ru_RU.UTF-8')
text = "тест test"
pattern = "\\w+"
result = re.findall(pattern, text, re.LOCALE)
print(result)   # Вывод: ['тест', 'test']`
            },
            {
                title: '<code>re.UNICODE</code> или <code>re.U</code>',
               description: 'Делает \\w, \\b, \\s и \\d соответствующими юникод-символам (по умолчанию).',
                code: `import re
text = "тест test"
pattern = "\\w+"
result = re.findall(pattern, text, re.UNICODE)
print(result)  # Вывод: ['тест', 'test']`
            },
              {
                  title: '<code>re.DEBUG</code>',
                   description: 'Выводит отладочную информацию о процессе компиляции регулярного выражения.',
                   code: `import re
pattern = "apple"
result = re.compile(pattern, re.DEBUG)
print(result) # Вывод отладочной информации`
              },
               {
                title: '<code>re.TEMPLATE</code> или <code>re.T</code>',
                 description: 'При использовании с re.VERBOSE позволяет использовать пробелы в шаблоне',
                code: `import re
pattern = r"""
\\d{3} # Три цифры
- # Дефис
\\d{4} # Четыре цифры
"""
text = "123-4567"
result = re.search(pattern, text, re.TEMPLATE | re.VERBOSE)
if result:
    print(result.group(0)) # Вывод: 123-4567`
            },
               {
                title: '<code>re.A | re.I</code>',
                description: 'Использование нескольких флагов',
                 code: `import re
text = "тест Test"
pattern = "test"
result = re.findall(pattern, text, re.A | re.I)
print(result) # Вывод: ['Test']`
               }

        ]
    }
};