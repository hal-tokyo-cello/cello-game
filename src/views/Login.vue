<template>
    <main>
        <h1>ログイン</h1>
        <div class="input">
            <span class="p-float-label">
	            <InputText id="email" type="text" v-model="value" />
	            <label for="email">メールアドレス</label>
            </span> 
            <span class="p-float-label">
                <Password id="password" v-model="value11" />
                <label for="password">パスワード</label>
            </span>
        </div>
        <div class="buttonArea">
            <div class="button">
                <Button label="キャンセル" class="p-button-outlined" />
            </div>
            <Button label="サインイン" />
        </div>
    </main>
</template>
<script>
export default {
}
</script>
<style>
    h1{
        text-align: center;
    }
    main{
        width:960px;
        margin: 0 auto;
    }
    .buttonArea{
        display: flex;
        justify-content: center;
    }

    #email,#password{
        width:600px;
    }
    .input{
        width: 600px;
        margin:0 auto;
    }
    .button{
        margin-right: 16px;
    }
</style>