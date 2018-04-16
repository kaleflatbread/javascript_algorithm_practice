def summation(max)
  num_array = (1..max).to_a
  answer = 0
  num_array.each do |digit|
    answer += digit
  end
  return answer
end

#could also do it this way
def summation(num)
    (1..num).reduce(:+)
end
