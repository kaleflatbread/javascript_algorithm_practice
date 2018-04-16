//UNFINISHED PYTHON CODE!!

// function check_divisors(divisor_array, low, high){
//   var rangeArray = range(low, high);
//   for (var idx = 0;idx<rangeArray.length;idx++){
//     var matches = 0
//     for (var div = 0;div<0;div++){
//        if (number % div === 0){
//          matches += 1
//       }
//     }
//   }
//
//      if (matches === divisor_array.length){
//        return  "all_match"
//      }
//      else if (matches > 0){
//        return "one_match"
//      }
//      else{
//        return matches
//      }
// }
//
// check_divisors([2,3,4,6], 2, 8)
// check_divisors([2,3], 1, 7)






//RUBY CODE BELOW


// def check_divisors(divisor_array, low, high)
//    numbers = (low..high).to_a
//    numbers.each do |number|
//      matches = 0
//      divisor_array.each do |div|
//        if number % div == 0
//          matches += 1
//        end
//      end
//
//      if matches == divisor_array.length
//        puts "#{number} all_match"
//      elsif matches > 0
//        puts "#{number} one_match"
//      else
//        puts number
//      end
//    end
// end
//
// check_divisors([2,3,4,6], 2, 8)
// check_divisors([2,3], 1, 7)
