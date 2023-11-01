<template>

    {{ __('phrases.welcome') }}
    {{ welcome }}

    <br>
    <br>
    Current locale: {{ $page.props.locale }}

</template>

<script>
export default {
    props: { welcome: String }
}
</script>
