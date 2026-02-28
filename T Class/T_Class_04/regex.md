## Regular Expression

"[a-z]" ---> String
/[a-z]/ ---> Regex Pattern

input = "1234567890"
/pattern/.test(input) ----> Boolean (true, false)

/[a-z]g/.test("Yntp")  ----> false;          "Yntp": Unknown word.
/[A-Z]g/.test("yntp")  ----> true;          "Yntp": Unknown word.

/[0-9]g/.test("1234")  ----> true;    
/[0-9]/.test("aa22")  ----> true;
/[0-9]g/.test("aa22")  ----> false;   
/\d/.test("aa22") ----> true  //"Does the string 'aa22' contain at least one digit?"
/\d/g.test("aa22")