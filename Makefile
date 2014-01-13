BIN = node_modules/.bin
SRCDIR = ./src
TESTDIR = ./test

MOCHA = $(BIN)/mocha
SJS = $(BIN)/sjs

all: test run-examples

test: build-test
	@$(MOCHA) --reporter spec --recursive --colors

build-test:
	@$(SJS) --module $(SRCDIR)/in.js $(TESTDIR)/in_test.sjs -o $(TESTDIR)/in_test.js

run-examples:
	@$(SJS) --module $(SRCDIR)/in.js ./examples.js | node --harmony --use-strict

