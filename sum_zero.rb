# Write a method that takes an array of numbers. If a pair of numbers
# in the array sums to zero, return the positions of those two numbers.
# If no pair of numbers sums to zero, return `nil`.
#
# Difficulty: medium.

def two_sum(nums)
  idx1 = 0
  while idx1 < nums.length
    idx2 = idx1 + 1
    while idx2 < nums.length
      if nums[idx1] + nums[idx2] == 0
        return [idx1, idx2]
      end
      idx2 += 1
    end
    idx1 += 1
  end

  return nil
end

#idx1 is o idx2 is 1 if 1 + 3 is 0 return 0 and 1 idx1 is 0 idx2 is 5 if 1 and 5 = 0 then idx1,idx2 etc. etc. iterate through 1

# These are tests to check that your code is working. After writing
# your solution, they should all print true.

puts("\nTests for #two_sum")
puts("===============================================")
    puts(
      'two_sum([1, 3, 5, -3]) == [1, 3]: ' + (two_sum([1, 3, 5, -3]) == [1, 3]).to_s
    )
    puts(
      'two_sum([1, 3, 5]) == nil: ' + (two_sum([1, 3, 5]) == nil).to_s
    )
puts("===============================================")
