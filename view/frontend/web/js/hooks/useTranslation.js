define(['react', 'mage/translate'], ({ useMemo }, $t) => {
    /*
     * The idea is to enable translations using current source from Magento.
     * However, Magento has a bug and it's not translating anything.
     *
     * You can use it this way:
     *
     * useTranslation('some text %1 %2 %3', [ var1, var2, var3 ]);
     * useTranslation('some text %a %b %a', { a: 1, b:2 });
     */
    const useTranslation = (text, variables = []) => {
        const translation = useMemo(() => {
            let result = $t(text);

            if (Array.isArray(variables)) {
                variables.forEach((value, idx) => {
                    result = result.replace(`%${idx + 1}`, value);
                });
            } else if (typeof variables === 'object' && variables !== null) {
                Object.entries(variables).forEach(([name, value]) => {
                    result = result.replaceAll(`%${name}`, value);
                });
            }

            return result;
        }, [text, variables]);

        return translation;
    };

    return useTranslation;
});
