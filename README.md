# Dynamically load UMD module

## Running the application
From `seamless-clone` folder, run `npm run build:lib:core` to build core library. It will also pack it as tgz file. 

From `/prospects` run `npm install ../seamless-clone/seamless-clone-core-0.0.1.tgz` and `npm run build:lib` to build the library and copy the content of `prospects/dist/bundles` to `seamless-clone/apps/public-shell/src/assets`.

Switch back to `/seamless-clone` folder and run the application as usual. The application will load compiled `prospects` project as standalone module  at run time. 

## Notes

### Shell (public-shell)
Just a normal application that have some additional script to help loading the module on run time. 
 - All dependencies from modules has to be listed in shell. 

### Module (Prospects)
- Cannot have lazy route here
- Enable Ivy (even no prod) as this is not library - it's only compiled as library


## Acknowledgement
Thanks to [@manfredsteyer](https://github.com/manfredsteyer) for the inspiration to create this research.
I tweak some code from [@manfredsteyer](https://github.com/manfredsteyer) sample so that it can load module not found page when the module to run at run time is not found. 
