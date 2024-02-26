<template>
  <VContainer>
    <v-row>
      <v-col cols="2">
        <NuxtLink to="/todo">
          Todo ページへ
        </NuxtLink>
      </v-col>
      <v-col cols="2">
        <NuxtLink to="/calculator">
          Calculator ページへ
        </NuxtLink>
      </v-col>
    </v-row>
    <v-divider />
    <IncButton />
  </VContainer>
</template>
