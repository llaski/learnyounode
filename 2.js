var nums = process.argv.splice(2),
	sum = 0;

for (i in nums) {
	sum += +(nums[i]);
}

console.log(sum);