BIN = node_modules/.bin
SRCDIR = ./macro
TESTDIR = ./test

MOCHA = $(BIN)/mocha
SJS = $(BIN)/sjs

all: test run-examples

test: build-test
	@$(MOCHA) --reporter spec --recursive --colors

build-test:
	@$(SJS) --module $(SRCDIR)/in.sjs $(TESTDIR)/in_test.sjs -o $(TESTDIR)/in_test.js

run-examples:
	@$(SJS) --module $(SRCDIR)/in.sjs ./examples.js | node --harmony --use-strict

