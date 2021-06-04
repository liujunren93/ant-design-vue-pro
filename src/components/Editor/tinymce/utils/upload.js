import { getCredentials } from '@/api/common'
import { MyOSS } from '@/utils/alioss'
export const upload = (blobInfo, success, failure, progress) => {
    console.log(blobInfo.filename())

    getCredentials().then(res => {
    const data = res.data
    console.log(data.roleArn)
        const oss = new MyOSS(data.roleArn, data.credentials.AccessKeyId, data.credentials.AccessKeySecret, data.credentials.SecurityToken, data.bucketName, data.dir)
        oss.upload(blobInfo.filename(), blobInfo.blob())
    }).catch(err => {
        console.log(err)
    })
}
