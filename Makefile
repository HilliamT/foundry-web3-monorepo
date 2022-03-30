# include .env file and export its env vars
# (-include to ignore error if it does not exist)
-include .env

# Dependencies
forge-install:; forge update
blitz-install:; (cd app && yarn)
install: forge-install blitz-install

# Clean
forge-clean:; forge clean
blitz-clean:; (cd app && npm run clean)
clean: forge-clean blitz-clean

# Test
forge-test:; forge test
blitz-test:; (cd app && npm run test)
test: forge-test blitz-test

# Blitz Miscs
app:; (cd app && npm run build)
dev:; (cd app && npm run dev)
prod:; (cd app && npm run start)

# Forge Miscs
contracts:; forge build
snapshot:; forge snapshot
trace:; forge test -vvv
report:; forge test --gas-report
