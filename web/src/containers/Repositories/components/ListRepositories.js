import { Button, Checkbox } from 'antd'
import _isEmpty from 'lodash/isEmpty'
import {GitBranchIcon, StarFillIcon } from '@primer/octicons-react'

import '../../../styles/listRepositories.scss'


const ListRepositories = ({
  bookmarksSelected, 
  data,
  onChange,
}) => {
  return (
    <div className='container-listRepositories'>
      { Object.values(data).map((repository) => {
        return <div key={repository.id} className='repository-item'>

          <div className='bookmarks'>
            <Checkbox
              //name={columnKey}
              //value={value}
              checked={ bookmarksSelected[repository.id] || false }
              onChange={(pickedValue) => onChange(repository.id, pickedValue.target) }
            >
            </Checkbox>
            </div>
          <a href={repository.url}>
            <div className='container-element repository-name'> 
              <p>{repository.repositoryName}</p>
            </div>
            <div className='container-element'>
              <p>{repository.name}</p>
            </div>
            <div className='container-element'>
              <p>{repository.language}</p>
            </div>
            <div className='wrapper-icons'>
              <div className='wrapperIcon'>
                <GitBranchIcon  className="icon" />
                <p>{repository.star}</p>
              </div>
            <div className='wrapperIcon'>
              <StarFillIcon className="icon" />
              <p>{repository.fork}</p>
            </div>
            </div>
        </a>  
          </div>
      })}
    </div>
  )

}

export default ListRepositories
