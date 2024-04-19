import CSS from './index.module.css'

function DetailSkeleton(){
    return(
        <>
        <div className={CSS.detail}>
                <div className={CSS.image}></div>
                <div className={CSS.about}>
                    <div className={CSS.title}></div>
                    <div className={CSS.title}></div>
                    <div className={CSS.category}></div>
                    <div className={CSS.description}></div>
                    <div className={CSS.description}></div>
                    <div className={CSS.description}></div>
                    <div className={CSS.description}></div>
                    <div className={CSS.price}></div>
                </div>
                <div className={CSS.add}>
                    <div className={CSS.addBtn}></div>
                </div>
            </div>
        </>
    )
}

export default DetailSkeleton