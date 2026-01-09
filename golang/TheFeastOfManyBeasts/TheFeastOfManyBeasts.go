//link https://www.codewars.com/kata/5aa736a455f906981800360d

package main

import "fmt"

func Feast(beast string, dish string) bool {
	return beast[0] == dish[0] && beast[len(beast)-1] == dish[len(dish)-1]
}

func main() {
	fmt.Println(Feast("great blue heron", "garlic naan")) // returns true
	fmt.Println(Feast("brown bear", "bear claw"))         // returns false
}
