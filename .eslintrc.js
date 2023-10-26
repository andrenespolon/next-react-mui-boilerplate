module.exports = {
	env: {
		browser: true,
		es2021: true,
		jest: true,
	},
	settings: {
		react: {
			version: 'detect',
		},
		jest: {
			version: 29,
		},
	},
	extends: [
		'airbnb',
		'airbnb-typescript',
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:prettier/recommended',
		'prettier',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
		files: ['*.ts', '*.tsx'],
		project: './tsconfig.eslint.json',
		tsconfigRootDir: __dirname,
	},
	plugins: [
		'react',
		'@typescript-eslint',
		'prettier',
		'import',
		'eslint-plugin-import-helpers',
	],
	rules: {
		'prettier/prettier': 'error',
		'no-param-reassign': 'off',
		'no-console': ['error'],
		'import/prefer-default-export': 'off',
		'react/prop-types': 'off',
		'react/display-name': 'error',
		'react/jsx-props-no-spreading': 'off',
		'react/jsx-fragments': 'off',
		'react/jsx-no-constructed-context-values': 'off',
		'sort-imports': [
			'error',
			{
				ignoreCase: false,
				ignoreDeclarationSort: true,
				ignoreMemberSort: false,
				memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
				allowSeparatedGroups: false,
			},
		],
		'import-helpers/order-imports': [
			'warn',
			{
				newlinesBetween: 'always',
				alphabetize: {
					order: 'asc',
					ignoreCase: false,
				},
				groups: [
					'/^react/',
					'/^next/',
					'/^@mui/',
					'module',
					['sibling', 'parent'],
					'index',
					'absolute',
				],
			},
		],
	},
};
