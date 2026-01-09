//link https://www.codewars.com/kata/56cd44e1aa4ac7879200010b

package main

import "fmt"

type MyString string

func (s MyString) IsUpperCase() bool {
	for i := 0; i < len(s); i++ {
		if s[i] >= 'a' && s[i] <= 'z' {
			return false
		}
	}
	return true
}

func main() {
	fmt.Println(MyString("HELLO").IsUpperCase()) // true
	fmt.Println(MyString("Hello").IsUpperCase()) // false
}
