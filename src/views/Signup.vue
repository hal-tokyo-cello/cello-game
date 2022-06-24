<template>
    <main>
        <h1>新規登録</h1>
        <span class="p-float-label">
	        <InputText id="username" type="text" v-model="value" />
	        <label for="username">メールアドレス</label>
        </span> 
        <span class="p-float-label">
            <Password id="password" v-model="value11" />
            <label for="password">パスワード</label>
        </span>
        <span class="p-float-label">
            <Password id="password" v-model="value11">
            <label for="password">確認用パスワード</label>
        </span>
    </main>
</template>
<script>
export default {};
</script>