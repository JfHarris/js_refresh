module.exports = {
    'env': {
        'browser': true,
    },
    'extends': 'eslint:recommended',
    'parserOptions': {
        'ecmaVersion': 8,
        'sourceType': 'module'
    },
    'rules': {
        'indent': [
            'error',
            2
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'always'
        ]
    }
};
