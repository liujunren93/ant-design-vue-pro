import { getCredentials } from '@/api/common'
import { MyOSS } from '@/utils/alioss'
export const upload = (blobInfo, success, failure, progress) => {
    console.log(blobInfo.filename())

    getCredentials().then(res => {
    const data = res.data
    console.log(blobInfo.filename)
        const oss = new MyOSS(data.region, data.credentials.AccessKeyId, data.credentials.AccessKeySecret, data.credentials.SecurityToken, data.bucketName, data.dir)
        oss.upload(blobInfo.filename(), blobInfo.blob()).then(res => {
            if (res.res.status === 200) {
                    success(res.url)
            }
        })
    }).catch(err => {
        console.log(err)
    })
}
