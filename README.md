# Stream app react native

Мобильное приложение "Танцы на льду" на React native

## Технологии:

- Expo
- React Native

## API

### Генерация типов и запросов

- Заходим на swagger и переходим по ссылке `/back/api/v3/api-docs` копируем и вставляем `/spec.json`
- `npm run openapi:sdk` генерируем типы и запросы в папку `src/api`
- Отменяем изменения в файле `src/api/base.ts`

## Разработка

- `npm i` - устанавливаем пакеты
- `npm run start` - запускаем приложение

## Сборка

- `rm -rf android` и `rm -rf ios` - удалить сгенерированные файлы с предыдущей итерации
- `npx expo prebuild --clean` - создать папки android и ios с помощью js файлов

Сборка в формате .apk:

- `npx react-native run-android --mode="debug"`
- `npx react-native run-android --mode="release"` - без сервера от Expo

Сборка в формате .aab:

- `npx react-native build-android --mode=debug`
- `npx react-native build-android --mode=release` - без сервера от Expo
