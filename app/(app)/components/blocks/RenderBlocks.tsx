import React from 'react'

import { CallToActionBlockComponent } from './CallToAction.js'
import { FeatureGridBlockComponent } from './FeatureGrid.js'
import { HeroBlockComponent } from './Hero.js'

export type LayoutBlock =
  | ({ blockType: 'hero'; id?: string | null } & any)
  | ({ blockType: 'featureGrid'; id?: string | null } & any)
  | ({ blockType: 'callToAction'; id?: string | null } & any)

export interface RenderBlocksProps {
  blocks?: LayoutBlock[] | null
}

export const RenderBlocks: React.FC<RenderBlocksProps> = ({ blocks }) => {
  if (!blocks || !Array.isArray(blocks) || blocks.length === 0) {
    return null
  }

  return (
    <div className="layout-blocks">
      {blocks.map((block, index) => {
        const key = block.id || `${block.blockType}-${index}`

        switch (block.blockType) {
          case 'hero':
            return <HeroBlockComponent key={key} {...block} />
          case 'featureGrid':
            return <FeatureGridBlockComponent key={key} {...block} />
          case 'callToAction':
            return <CallToActionBlockComponent key={key} {...block} />
          default:
            return null
        }
      })}
    </div>
  )
}
