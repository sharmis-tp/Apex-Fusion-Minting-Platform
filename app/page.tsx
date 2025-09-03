'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Coins, Image, Zap, Shield, Users, TrendingUp } from 'lucide-react';

export default function Home() {
  const [coinData, setCoinData] = useState({
    name: '',
    symbol: '',
    supply: '',
    description: '',
    decimals: '6'
  });

  const [nftData, setNftData] = useState({
    name: '',
    description: '',
    image: '',
    attributes: '',
    collection: ''
  });

  const handleCoinMint = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Minting coin:', coinData);
    // Here you would integrate with Cardano/Apex Fusion APIs
  };

  const handleNFTMint = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Minting NFT:', nftData);
    // Here you would integrate with Cardano/Apex Fusion APIs
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Apex Fusion
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent block">
                Minting Platform
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Create and register your own coins and NFTs on the Cardano blockchain with ease. 
              Professional-grade tools for developers and creators alike.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                <Shield className="w-4 h-4 mr-2" />
                Secure Blockchain
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                <Zap className="w-4 h-4 mr-2" />
                Fast Minting
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                <Users className="w-4 h-4 mr-2" />
                Community Driven
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Coins className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">10,000+</h3>
            <p className="text-gray-400">Coins Minted</p>
          </div>
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Image className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">50,000+</h3>
            <p className="text-gray-400">NFTs Created</p>
          </div>
          <div className="text-center">
            <div className="bg-gradient-to-r from-green-500 to-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">₳2.5M</h3>
            <p className="text-gray-400">Total Value Locked</p>
          </div>
        </div>

        {/* Minting Interface */}
        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="coin" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="coin" className="flex items-center gap-2">
                <Coins className="w-4 h-4" />
                Mint Coin
              </TabsTrigger>
              <TabsTrigger value="nft" className="flex items-center gap-2">
                <Image className="w-4 h-4" />
                Mint NFT
              </TabsTrigger>
            </TabsList>

            <TabsContent value="coin">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Coins className="w-5 h-5" />
                    Create Your Own Coin
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    Launch your custom token on the Cardano blockchain with Apex Fusion
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleCoinMint} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="coin-name" className="text-white">Token Name</Label>
                        <Input
                          id="coin-name"
                          placeholder="e.g., MyAwesome Token"
                          value={coinData.name}
                          onChange={(e) => setCoinData({...coinData, name: e.target.value})}
                          className="bg-white/5 border-white/20 text-white placeholder:text-gray-400"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="coin-symbol" className="text-white">Symbol</Label>
                        <Input
                          id="coin-symbol"
                          placeholder="e.g., MAT"
                          value={coinData.symbol}
                          onChange={(e) => setCoinData({...coinData, symbol: e.target.value})}
                          className="bg-white/5 border-white/20 text-white placeholder:text-gray-400"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="coin-supply" className="text-white">Total Supply</Label>
                        <Input
                          id="coin-supply"
                          type="number"
                          placeholder="e.g., 1000000"
                          value={coinData.supply}
                          onChange={(e) => setCoinData({...coinData, supply: e.target.value})}
                          className="bg-white/5 border-white/20 text-white placeholder:text-gray-400"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="coin-decimals" className="text-white">Decimals</Label>
                        <Input
                          id="coin-decimals"
                          type="number"
                          value={coinData.decimals}
                          onChange={(e) => setCoinData({...coinData, decimals: e.target.value})}
                          className="bg-white/5 border-white/20 text-white placeholder:text-gray-400"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="coin-description" className="text-white">Description</Label>
                      <Textarea
                        id="coin-description"
                        placeholder="Describe your token's purpose and utility..."
                        value={coinData.description}
                        onChange={(e) => setCoinData({...coinData, description: e.target.value})}
                        className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 min-h-[100px]"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-6 text-lg font-semibold transition-all duration-200"
                    >
                      <Coins className="w-5 h-5 mr-2" />
                      Mint Coin on Apex Fusion
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="nft">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Image className="w-5 h-5" />
                    Create Your NFT
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    Mint unique digital assets on the Cardano blockchain
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleNFTMint} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="nft-name" className="text-white">NFT Name</Label>
                      <Input
                        id="nft-name"
                        placeholder="e.g., Cosmic Dragon #001"
                        value={nftData.name}
                        onChange={(e) => setNftData({...nftData, name: e.target.value})}
                        className="bg-white/5 border-white/20 text-white placeholder:text-gray-400"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="nft-collection" className="text-white">Collection Name</Label>
                      <Input
                        id="nft-collection"
                        placeholder="e.g., Cosmic Dragons"
                        value={nftData.collection}
                        onChange={(e) => setNftData({...nftData, collection: e.target.value})}
                        className="bg-white/5 border-white/20 text-white placeholder:text-gray-400"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="nft-image" className="text-white">Image URL</Label>
                      <Input
                        id="nft-image"
                        type="url"
                        placeholder="https://example.com/my-nft-image.jpg"
                        value={nftData.image}
                        onChange={(e) => setNftData({...nftData, image: e.target.value})}
                        className="bg-white/5 border-white/20 text-white placeholder:text-gray-400"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="nft-description" className="text-white">Description</Label>
                      <Textarea
                        id="nft-description"
                        placeholder="Describe your NFT's story, rarity, and unique features..."
                        value={nftData.description}
                        onChange={(e) => setNftData({...nftData, description: e.target.value})}
                        className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 min-h-[120px]"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="nft-attributes" className="text-white">Attributes (JSON Format)</Label>
                      <Textarea
                        id="nft-attributes"
                        placeholder='[{"trait_type": "Rarity", "value": "Legendary"}, {"trait_type": "Power", "value": "9000"}]'
                        value={nftData.attributes}
                        onChange={(e) => setNftData({...nftData, attributes: e.target.value})}
                        className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 min-h-[100px] font-mono text-sm"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-6 text-lg font-semibold transition-all duration-200"
                    >
                      <Image className="w-5 h-5 mr-2" />
                      Mint NFT on Apex Fusion
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Info Section */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mt-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Why Choose Apex Fusion?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
              <CardHeader className="text-center">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white">Secure & Reliable</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-center">
                  Built on Cardano's proven blockchain infrastructure with enterprise-grade security standards.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
              <CardHeader className="text-center">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white">Lightning Fast</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-center">
                  Streamlined minting process that takes minutes, not hours. Get your assets live quickly.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
              <CardHeader className="text-center">
                <div className="bg-gradient-to-r from-green-500 to-blue-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white">Low Fees</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-center">
                  Enjoy some of the lowest transaction fees in the industry thanks to Cardano's efficiency.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Getting Started Section */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Card className="bg-white/5 backdrop-blur-sm border-white/10">
            <CardHeader>
              <CardTitle className="text-white text-center text-2xl">Getting Started</CardTitle>
              <CardDescription className="text-gray-300 text-center">
                New to blockchain? Here's what you need to know
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="text-white font-semibold">For Coin Minting:</h4>
                  <ul className="text-gray-300 space-y-2 text-sm">
                    <li>• Choose a unique name and symbol</li>
                    <li>• Set your total supply carefully</li>
                    <li>• Provide clear utility description</li>
                    <li>• Consider tokenomics and distribution</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="text-white font-semibold">For NFT Minting:</h4>
                  <ul className="text-gray-300 space-y-2 text-sm">
                    <li>• Ensure your image is hosted reliably</li>
                    <li>• Add meaningful attributes and metadata</li>
                    <li>• Consider rarity and collection themes</li>
                    <li>• Verify all details before minting</li>
                  </ul>
                </div>
              </div>
              <div className="text-center pt-6">
                <p className="text-gray-400 text-sm">
                  Need help? Check out the{' '}
                  <a href="#" className="text-blue-400 hover:text-blue-300 underline">
                    Cardano developer documentation
                  </a>{' '}
                  for detailed tutorials and best practices.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}