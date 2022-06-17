module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'type-enum': [
            2,
            'always',
            [
                'feat',
                'bug',
                'wip',
                'perf',
                'refactor',
                'style',
                'chore',
                'test'
            ]
        ]
    }
};
