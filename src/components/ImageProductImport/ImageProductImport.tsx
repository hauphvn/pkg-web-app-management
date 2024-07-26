import {IconPlus, IconRemove} from "../../assets/svgs/SVGIcon.tsx";
import {useState} from "react";
import ImageDefault from "../../assets/imgs/defaul-img.png";
interface ImageProductImportProps {
    item: number,
    caption?: string
}

const ImageProductImport = (props: ImageProductImportProps) => {
    // const [fileImg, setFileImg] = useState<File | undefined>(undefined);
    const [imageUpload, setImageUpload] = useState('')

    function handleImgUpload(event: React.ChangeEvent<HTMLInputElement> ) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        const file = event?.target?.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            // setFileImg(file);
            setImageUpload(reader?.result?.toString() ||
                '');
        }
        reader.readAsDataURL(file);
    }
    return (
        <div className={'image-product-import-root relative overflow-hidden'}>
            <label
                htmlFor={`image-upload-${props.item}`}
                className={'container border border-dashed rounded-[8px] hover:cursor-pointer border-greenTo w-[137px] aspect-square flex flex-col gap-y-[5px] justify-center items-center'}>
                <IconPlus classNamePath={'stroke-greenTo'}/>
                <div className={'text-[12px] font-[500] text-greenTo'}>Thêm mới</div>
            </label>
            {imageUpload && (
                <div>
                    <div onClick={
                        () => {
                            // setFileImg(undefined);
                            setImageUpload('')
                        }
                    } className={'absolute hover:cursor-pointer right-[10px] top-[10px] z-10 w-[17px] h-[17px] bg-neutrals-200 rounded-full flex justify-center items-center '}>
                        <IconRemove/>
                    </div>
                    <div className={'absolute top-0 left-0 '}>
                        <img
                            className={'w-[137px] aspect-square rounded-[8px]'}
                            src={imageUpload ? imageUpload : ImageDefault}
                            alt="new product img"/>
                    </div>
                </div>
            )}
            <input
                name={'image'} // Backend must have a field name is 'image' for multer middleware example: upload.single('image')
                id={`image-upload-${props.item}`}
                type={'file'}
                multiple={false}
                accept={'image/*'}
                className={'hidden'}
                onChange={(e) => handleImgUpload(e)}
            />
            <div className={'pt-[12px] text-neutrals-700 text-[12px] font-[500]'}>{props.caption}</div>
        </div>
    );
};

export default ImageProductImport;