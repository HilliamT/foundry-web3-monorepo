# include .env file and export its env vars
# (-include to ignore error if it does not exist)
-include .env

# Dependencies
forge-install:; forge update
blitz-install:; (cd app && yarn)
install: forge-install blitz-install

# Lint
forge-lint:; npx solhint --config ./.solhint.json  --fix contracts/**/*.sol
blitz-lint:; echo "blitz-lint: TODO"
lint: forge-lint blitz-lint

# Clean
forge-clean:; forge clean
blitz-clean:; (cd app && npm run clean)
snapshot-clean:; rm -rf .gas-snapshot
clean: forge-clean blitz-clean snapshot-clean

# Test
forge-test:; forge test -vvv
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

# Stop 'make' from mistaking commands for directories
.PHONY: contracts