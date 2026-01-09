//link https://www.codewars.com/kata/53369039d7ab3ac506000467

package main

import "fmt"

func BoolToWord(word bool) string {
	if word {
		return "Yes"
	}
	return "No"
}

func main() {
	fmt.Println(BoolToWord(true))  // returns "Yes"
	fmt.Println(BoolToWord(false)) // returns "No"
}
