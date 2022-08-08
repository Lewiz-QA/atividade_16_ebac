describe('Primeiro teste', () => {
    it('Preencher o menu Forms', async() => {
        await $('~Forms').click()
        await $('~text-input').setValue('Teste')
        expect(await $('~text-input')).toBeDisplayed()
        await $('~switch').click()
        await $('//android.view.ViewGroup[@content-desc="Dropdown"]/android.view.ViewGroup/android.widget.EditText').click()
        await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/androidx.appcompat.widget.LinearLayoutCompat/android.widget.FrameLayout/android.widget.ListView/android.widget.CheckedTextView[3]').click()
        await driver.execute('mobile:scroll',{strategy:'accessibility id',selector:'~button-Active',direction:'down'})
        await $('~button-Active').click()
        await $('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.Button[3]').click()
        await $('~Home').click()
    });
});