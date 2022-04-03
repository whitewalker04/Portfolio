//function to embed the sub-html

export async function includeHtml( path, el ) {
    try{
        let res = await fetch( path );
        let data = await res.text();
        el.innerHTML = data;
    } catch( ex ) {
        console.error( ex );
    }
}