function closestPrimes(left: number, right: number): number[] {
    let findPrimes = (s: number, n: number): number[] => {
        let primes: boolean[] = new Array(n + 1).fill(true);
        primes[0] = false;
        primes[1] = false;

        for (let i = 2; i <= n; i++) 
            if (primes[i])
                for (let j = i * i; j <= n; j += i) 
                    primes[j] = false;

        const result: number[] = [];
        for (let i = s; i <= n; i++) 
            if (primes[i]) result.push(i);

        return result;
    };

    let primes: number[] = findPrimes(left, right);

    if (primes.length <= 1) return [-1, -1];

    let ans: number[] = [primes[0], primes[1]];

    for (let i: number = 1; i < primes.length; i++)
        if (primes[i] - primes[i - 1] < ans[1] - ans[0])
            ans = [primes[i - 1], primes[i]];

    return ans;
};