//link https://www.codewars.com/kata/58261acb22be6e2ed800003a

package main

import "fmt"

func GetVolumeOfCuboid(length, width, height float64) float64 {
	return length * width * height
}

func main() {
	fmt.Println(GetVolumeOfCuboid(1.0, 2.0, 3.0)) // 6.0
	fmt.Println(GetVolumeOfCuboid(2.5, 3.0, 4.0)) // 30.0
}
