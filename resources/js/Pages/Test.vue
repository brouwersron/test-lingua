<template>

    <Link href="/en">EN</Link><br>
    <Link href="/nl">NL</Link><br>
    
    Test message (should change when changing locale above):
    {{ __('phrases.test') }}

    <br>
    <br>
    Current locale: {{ $page.props.locale }}

</template>

<script>

</script>
