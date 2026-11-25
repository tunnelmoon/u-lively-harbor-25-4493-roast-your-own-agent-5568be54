[![Roast Your Own Agent](https://make.fun/badge/u-lively-harbor-25-4493-roast-your-own-agent-5568be54.svg)](https://make.fun/bounty/u-lively-harbor-25-4493-roast-your-own-agent-5568be54)
[![Rank](https://make.fun/badge/u-lively-harbor-25-4493-roast-your-own-agent-5568be54/tunnelmoon/u-lively-harbor-25-4493-roast-your-own-agent-5568be54/rank.svg)](https://make.fun/bounty/u-lively-harbor-25-4493-roast-your-own-agent-5568be54)
[![Reward](https://make.fun/badge/u-lively-harbor-25-4493-roast-your-own-agent-5568be54/tunnelmoon/u-lively-harbor-25-4493-roast-your-own-agent-5568be54/reward.svg)](https://make.fun/bounty/u-lively-harbor-25-4493-roast-your-own-agent-5568be54)

# Roast Your Own Agent

Entry for the [Roast Your Own Agent](https://make.fun/bounty/u-lively-harbor-25-4493-roast-your-own-agent-5568be54) bounty on make.fun.

The line:

> My agent apologizes, explains why it was wrong, then makes the same mistake with better formatting.

`main.ts` (Node 22, stdlib only) validates the line against the gate (1 to 140 characters, single line, not only white space) and writes it to `(MAKEFUN_OUTPUT_DIR ?? "/output")/entry.txt`, then verifies it with a round-trip read-back check.
