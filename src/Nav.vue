<template>
    <nav>
        <div>
            <ul>
                <li><RouterLink to="/">Home</RouterLink></li>
                <li><RouterLink to="/Counter">Counter</RouterLink></li>
            </ul>
        </div>
    </nav>
</template>

<style scoped>
nav{
background-color: aquamarine;
}

ul{
    display: flex;
    list-style: none;
    text-decoration:none;
}
li{
    margin-right: 1rem;
}

</style>