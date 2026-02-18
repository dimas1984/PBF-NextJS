jika melakukan duplikat project jika terjadi error maka lakukan clean rebuild

caranya 

* hapus folder .next
* rm -rf node\_modules / hapus folder node\_modules
* rm package-lock.json / hapus file nya
* npm cache clean --force
* npm install
* npm run dev


jika tsconfig terjadi problem solusinya

* npm install --save-dev typescript @types/react @types/react-dom
* tutup vscode dan buka kembali



